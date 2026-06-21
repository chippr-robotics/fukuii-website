Text field for forms and config entry. Hairline border on the green-tinted surface, green focus ring.

```jsx
<Input label="Network" defaultValue="mordor" />
<Input label="JWT secret" mono placeholder="/etc/fukuii/jwt.hex" />
<Input label="Message" as="textarea" error="Message is required" />
```

`mono` for technical values, `as="textarea"` for multiline, `error` for the invalid state.
