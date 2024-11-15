'use client'

import React from 'react'

function LoginButton({ url }: { url: string }) {
  return (
    <a
    // eslint-disable-next-line tailwindcss/no-custom-classname
      className="btn btn--style-primary btn--icon-style-without-border btn--size-medium"
      target="_blank"
      style={{
        display: 'block',
        textAlign: 'center',
        width: '100%',
      }}
      href={url}
    >
      Zitdal Login
    </a>
  )
}

export default LoginButton
