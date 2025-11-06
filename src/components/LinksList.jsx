import React from 'react';
import LinkButton from './LinkButton';

const LinksList = () => {
  const links = [
    { label: 'My Portfolio', href: '#' },
    { label: 'Instagram', href: '#' },
    { label: 'GitHub', href: '#' },
    { label: 'LinkedIn', href: '#' },
  ];

  return (
    <div className="mt-6 grid gap-3 w-full max-w-xl">
      {links.map((l) => (
        <LinkButton key={l.label} href={l.href} label={l.label} />
      ))}
    </div>
  );
};

export default LinksList;
