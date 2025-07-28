'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { v4 as uuidv4 } from 'uuid';

export default function ChatRedirect() {
  const router = useRouter();

  useEffect(() => {
    const newThreadId = uuidv4();
    const now = new Date().toISOString();
    // Initialize new thread in localStorage with timestamp
    const stored = localStorage.getItem('biblical-chat-threads');
    const threads = stored ? JSON.parse(stored) : {};
    threads[newThreadId] = { messages: [], lastUpdated: now };
    localStorage.setItem('biblical-chat-threads', JSON.stringify(threads));
    // Redirect to new thread
    router.push(`/chat/${newThreadId}`);
  }, [router]);

  return null;
}