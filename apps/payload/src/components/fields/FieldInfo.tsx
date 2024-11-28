/* eslint-disable func-style */

import type { UIFieldServerComponent } from 'payload'
import React from 'react'

const InfoField: UIFieldServerComponent = ({ field: { custom } }) => {
  return (
    <div style={{
      alignItems: 'center',
      backgroundColor: 'var(--theme-elevation-50)',
      borderRadius: '4px',
      display: 'flex',
      flex: 'none',
      fontSize: 'var(--text-caption)',
      gap: '6px',
      marginBottom: '8px',
      marginTop: '8px',
      paddingBottom: '4px',
      paddingLeft: '8px',
      paddingRight: '8px',
      paddingTop: '4px',
    }}
    >
      <svg xmlns="http://www.w3.org/2000/svg" style={{ width: '2rem' }} viewBox="0 0 1024 1024">
        <path fill="currentColor" d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448s448-200.6 448-448S759.4 64 512 64m0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372s372 166.6 372 372s-166.6 372-372 372" />
        <path fill="currentColor" d="M464 336a48 48 0 1 0 96 0a48 48 0 1 0-96 0m72 112h-48c-4.4 0-8 3.6-8 8v272c0 4.4 3.6 8 8 8h48c4.4 0 8-3.6 8-8V456c0-4.4-3.6-8-8-8" />
      </svg>
      <p>
        {`${custom?.info}`}
      </p>
    </div>

  )
}

export default InfoField