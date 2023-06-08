## An accessible-friendly onKeyDown hook for react
### Avoid pesky keyboard traps.
> A “keyboard trap” occurs when a person who uses a keyboard cannot move 
> focus away from an interactive element or control using the keyboard alone.

When building react applications, we want to make them as accessible as 
possible to users, however it can be very easy to accidentally create 
keyboard traps.

If you have ever installed https://www.npmjs.com/package/eslint-plugin-jsx-a11y 
you will know that interactive elements require a keyboard event handlers in 
your react application. However traditionally `onKeyDown` will fire on every 
key down event, forcing you to have to check the key every time.

This package is a simple re-usable hook that takes care of that for you.

### Usage

Trigger onKeyDown when any key is pressed except for `shift` and `tab` (This
is to allow keyboard users to tab up as well as down the tab stack)
```tsx
          return (
            <div
              role="button"
              tabIndex={0}
              onClick={handleSelect}
              onKeyDown={useKeyDown(handleSelect)}
            >
              { text }
            </div>
          )
```

#### Whitelist only
You may want to only call onKeyDown if certain keys are pressed, in this 
case you can pass an array of strings as the second argument. In the example 
below, onKeyDown will only be called if `Enter`,`ArrowUp` or `ArrowDown` are 
pressed
```tsx
          return (
            <div
              role="button"
              tabIndex={0}
              onClick={handleSelect}
              onKeyDown={useKeyDown(handleSelect, ["Enter","ArrowUp","ArrowDown"])}
            >
              { text }
            </div>
          )
```
