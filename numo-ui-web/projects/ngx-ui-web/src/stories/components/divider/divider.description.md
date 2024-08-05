# Divider Component

The `Divider` component from PrimeNG is used to separate content visually within your application. It can be customized to fit various design needs, including different types, layouts, and alignment options. The component helps in creating clear visual breaks between sections of content.

## Basic Example

The following example demonstrates a `Divider` with various configurations, including `solid` and `dashed` types, different layouts, and alignment options.

```html
<p>Lorem ipsum dolor sit amet...</p>
<p-divider [type]="type" [layout]="layout" />
<p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium...</p>
<p-divider [align]="align" [type]="type">
    <b>{{label}}</b>
</p-divider>
<p>At vero eos et accusamus et iusto odio dignissimos...</p>
<p-divider type="dashed" />
<p>Temporibus autem quibusdam et aut officiis...</p>
```
