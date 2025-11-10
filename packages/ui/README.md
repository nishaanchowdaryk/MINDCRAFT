# Mindcraft UI

```tsx
import { Button, Card, Modal } from '@mindcraft/ui';
```

## Button

```tsx
<Button>Default</Button>
<Button variant="outline">Outline</Button>
<Button variant="ghost">Ghost</Button>
<Button size="sm">Small</Button>
<Button variant="outline" size="sm">Small Outline</Button>
```

## Card

```tsx
<Card header="Card title" footer="Optional footer">Body content</Card>
```

## Modal

```tsx
<Modal open={isOpen} onClose={handleClose} title="Title">
  Modal body
</Modal>
```
