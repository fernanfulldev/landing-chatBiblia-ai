'use client';

import { useEffect, useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { Sparkles } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { v4 as uuidv4 } from 'uuid';

export default function ChatClient({ hash }) {
  const [threads, setThreads] = useState({});
  const [currentThread, setCurrentThread] = useState(null);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);

  const inputRef = useRef(null);
  const router = useRouter();

  // Load thread history from localStorage on mount
  useEffect(() => {
    const stored = localStorage.getItem('biblical-chat-threads');
    if (stored) {
      const parsed = JSON.parse(stored);
      // Migrate old format to new format with timestamps
      const migrated = Object.fromEntries(
        Object.entries(parsed).map(([id, thread]) => {
          if (Array.isArray(thread)) {
            return [id, { messages: thread, lastUpdated: new Date().toISOString() }];
          }
          return [id, thread];
        })
      );
      setThreads(migrated);
      if (hash && migrated[hash]) {
        setCurrentThread(hash);
      } else if (Object.keys(migrated).length > 0) {
        // Redirect to /chat only if threads exist but hash is invalid
        router.push('/chat');
      }
      // If no threads exist or hash is new, allow rendering
    }
  }, [hash]);

  // Save thread history to localStorage whenever threads change
  useEffect(() => {
    if (Object.keys(threads).length > 0) {
      localStorage.setItem('biblical-chat-threads', JSON.stringify(threads));
    }
  }, [threads]);

  const createEmptyThread = () => {
    const id = uuidv4();
    const now = new Date().toISOString();
    // Initialize new thread with empty messages and timestamp
    setThreads((prev) => ({
      ...prev,
      [id]: { messages: [], lastUpdated: now },
    }));
    setCurrentThread(id);
    router.push(`/chat/${id}`);

    setTimeout(() => {
      inputRef.current?.focus();
    }, 100);
  };

  const sendMessage = async () => {
    if (!input.trim()) return;

    if (!currentThread) {
      alert('Please create a new conversation first.');
      return;
    }

    const userMessage = { role: 'user', content: input };
    const now = new Date().toISOString();
    const updatedMessages = [...(threads[currentThread]?.messages || []), userMessage];

    // Update threads with new message and timestamp
    setThreads((prev) => ({
      ...prev,
      [currentThread]: { messages: updatedMessages, lastUpdated: now },
    }));

    setInput('');
    setLoading(true);

    try {
      const res = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ messages: updatedMessages }),
      });

      const data = await res.json();
      if (data?.error) return alert(data.error);

      const aiMessage = data.message;

      // Append AI response and update timestamp
      setThreads((prev) => ({
        ...prev,
        [currentThread]: { messages: [...updatedMessages, aiMessage], lastUpdated: new Date().toISOString() },
      }));
    } catch (e) {
      alert('Error communicating with the server.');
    } finally {
      setLoading(false);
    }
  };

  const renderMessage = (msg, i) => (
    <motion.div
      key={i}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, delay: i * 0.05 }}
      className={`p-4 mb-2 rounded-xl border-l-4 ${
        msg.role === 'user'
          ? 'bg-yellow-100 border-yellow-600 text-right'
          : 'bg-gray-50 border-yellow-500 text-left'
      }`}
    >
      <p className="text-gray-700 leading-relaxed whitespace-pre-line">
        <strong>{msg.role === 'user' ? 'You' : 'ChatBiblia'}:</strong> {msg.content}
      </p>
    </motion.div>
  );

  const messages = threads[currentThread]?.messages || [];

  // Sort threads by lastUpdated timestamp (most recent first)
  const sortedThreads = Object.entries(threads).sort(
    ([, a], [, b]) => new Date(b.lastUpdated) - new Date(a.lastUpdated)
  );

  return (
    <div className="flex h-screen font-sans">
      {/* Sidebar */}
      <aside className="w-64 bg-gray-100 p-4 border-r border-gray-300 flex flex-col">
        <Link href="/" className="flex items-center space-x-2 mb-4">
          <Image
            src="/images/logo-icon.png"
            alt="ChatBiblia.ai Logo"
            width={40}
            height={40}
            className="cursor-pointer"
            aria-label="ChatBiblia.ai Home"
          />
          <span className="text-gray-900 font-semibold text-lg">ChatBiblia.ai</span>
        </Link>
        <button
          onClick={createEmptyThread}
          className="w-full mb-3 px-3 py-2 bg-yellow-600 text-white rounded-md hover:bg-yellow-700 transition text-sm font-semibold"
        >
          + New conversation
        </button>
        <div className="flex flex-col gap-2 overflow-auto">
          {sortedThreads.length === 0 && (
            <span className="text-sm text-gray-400">No threads yet.</span>
          )}
          {sortedThreads.map(([id, thread]) => (
            <Link
              key={id}
              href={`/chat/${id}`}
              className={`text-left px-3 py-2 rounded-md text-sm font-medium shadow-sm transition ${
                currentThread === id
                  ? 'bg-yellow-500 text-white'
                  : 'bg-white hover:bg-yellow-100 text-gray-700'
              }`}
            >
              {thread.messages[0]?.content?.slice(0, 25) || 'New thread'}
            </Link>
          ))}
        </div>
      </aside>

      {/* Chat */}
      <main className="flex-1 flex flex-col p-6 bg-white">
        <h1 className="text-2xl font-bold text-yellow-600 mb-4 flex items-center gap-2">
          <Sparkles className="w-6 h-6" />
          ChatBiblia.ai
        </h1>

        <div className="flex-1 overflow-y-auto space-y-2 mb-4">
          {messages.map((msg, i) => renderMessage(msg, i))}
          {loading && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
              className="bg-gray-100 border-l-4 border-yellow-400 p-4 rounded-xl text-sm text-gray-600"
            >
              ChatBiblia: typing...
            </motion.div>
          )}
        </div>

        <div className="flex gap-2">
          <input
            ref={inputRef}
            className="flex-1 border border-gray-300 rounded-lg p-3 text-sm focus:ring-2 focus:ring-yellow-500 outline-none"
            placeholder="Ask a biblical question..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && sendMessage()}
          />
          <button
            onClick={sendMessage}
            disabled={loading}
            className="bg-yellow-600 text-white px-5 py-3 rounded-lg hover:bg-yellow-700 transition font-semibold"
          >
            Send
          </button>
        </div>
      </main>
    </div>
  );
}