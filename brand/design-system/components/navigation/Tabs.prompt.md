Underline tab bar (`tab-btn`) with a green active indicator. Render panels yourself keyed on the active id.

```jsx
const items = [{id:'sync',label:'Sync modes'},{id:'engine',label:'Engine API'}];
const [tab, setTab] = React.useState('sync');
<Tabs items={items} value={tab} onChange={setTab} />
{tab === 'sync' && <SyncPanel/>}
```

Controlled via `value`/`onChange`, or uncontrolled via `defaultValue`.
