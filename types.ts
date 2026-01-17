
import React from 'react';
import { motion } from 'framer-motion';

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
  details?: string;
}

export interface NavLink {
  label: string;
  href: string;
}
