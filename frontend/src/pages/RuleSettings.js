// src/pages/RuleSettings.js
import React, { useState } from 'react';

const initialRules = [
  { rule: 'no-console', enabled: true },
  { rule: 'semi', enabled: true },
  { rule: 'eqeqeq', enabled: false },
];

function RuleSettings() {
  const [rules, setRules] = useState(initialRules);

  const toggleRule = idx => {
    setRules(rules.map((r, i) => i === idx ? { ...r, enabled: !r.enabled } : r));
  };

  return (
    <div>
      <h2>Rule Settings</h2>
      <ul>
        {rules.map((r, i) => (
          <li key={r.rule}>
            <label>
              <input
                type="checkbox"
                checked={r.enabled}
                onChange={() => toggleRule(i)}
              />
              {r.rule}
            </label>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default RuleSettings;
