# mk-code-lab-ilp-23-24

mk's initial learning project doc.

## simply the simple steps

no learning here, just the recipe with a minimum of commentary

- start your next app: `npx create-next-app@latest mk-code-lab-24`
- say yes to typescript
- say yes to eslint
- say yes to tailwind
- say yes to src directory
- say yes to app router
- say no to customize default import alias
- get rid of everything in the main page.tsx:

```
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1 className="font-black">mk codelab</h1>
    </main>
  )
}
```


