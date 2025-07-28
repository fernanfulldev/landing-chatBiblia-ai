import ChatClient from './ChatClient';

export async function generateStaticParams() {
  // Threads are stored in localStorage on the client, so no static params are known at build time
  return [];
}

export default function ChatPage({ params }) {
  return <ChatClient hash={params.hash} />;
}