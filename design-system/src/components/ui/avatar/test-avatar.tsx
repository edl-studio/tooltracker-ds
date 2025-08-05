import React from 'react';
import { Avatar } from './avatar';
import { getInitials } from './avatar-utils';

export function TestAvatar() {
  return (
    <div style={{ padding: '100px', textAlign: 'center' }}>
      <h2>Avatar Component Test</h2>
      
      <div style={{ marginBottom: '20px' }}>
        <h3>Initials Variant</h3>
        <div style={{ display: 'flex', gap: '10px', justifyContent: 'center', marginBottom: '10px' }}>
          <Avatar initials="JD" size="sm" />
          <Avatar initials="AB" size="md" />
          <Avatar initials="CD" size="lg" />
        </div>
        <p>Using utility: {getInitials("John Doe")} for "John Doe"</p>
        <p>Using utility: {getInitials("Mary Jane Smith", 3)} for "Mary Jane Smith"</p>
      </div>

      <div style={{ marginBottom: '20px' }}>
        <h3>Icon Variant</h3>
        <div style={{ display: 'flex', gap: '10px', justifyContent: 'center', marginBottom: '10px' }}>
          <Avatar icon="person" size="sm" />
          <Avatar icon="account_circle" size="md" />
          <Avatar icon="face" size="lg" />
        </div>
      </div>

      <div style={{ marginBottom: '20px' }}>
        <h3>With Image</h3>
        <div style={{ display: 'flex', gap: '10px', justifyContent: 'center', marginBottom: '10px' }}>
          <Avatar 
            src="https://images.unsplash.com/photo-1502823403499-6ccfcf4fb453?&w=256&h=256&q=70&crop=focalpoint&fp-x=0.5&fp-y=0.3&fp-z=1&fit=crop"
            alt="User avatar"
            fallback="JD"
            size="md"
          />
        </div>
      </div>

      <div style={{ marginBottom: '20px' }}>
        <h3>All Sizes</h3>
        <div style={{ display: 'flex', gap: '10px', justifyContent: 'center', alignItems: 'center', marginBottom: '10px' }}>
          <Avatar initials="JD" size="sm" />
          <Avatar initials="JD" size="md" />
          <Avatar initials="JD" size="lg" />
          <Avatar initials="JD" size="xl" />
          <Avatar initials="JD" size="2xl" />
        </div>
      </div>
    </div>
  );
} 