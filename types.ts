import React from 'react';

export interface ChatMessage {
  id: string;
  role: 'user' | 'model';
  text: string;
  timestamp: Date;
}

export interface ServiceItem {
  id: number;
  title: string;
  icon: React.ReactNode;
  link: string;
}

export interface Promotion {
  id: number;
  title: string;
  date: string;
  imageUrl: string;
  category: string;
}