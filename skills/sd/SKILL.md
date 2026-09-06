---
name: sd
description: Use sd for regular-expression or literal text replacement with preview, replacement limits, flags, and standard input.
---

# sd

Basic replacement modifies files in place:

```bash
sd 'old' 'new' file.txt
sd 'user_(\\w+)' '$1' file.txt
```

Use fixed-string mode when arguments are literal text:

```bash
sd -F 'old text' 'new text' file.txt
```

Preview changes before writing:

```bash
sd -p 'old' 'new' file.txt
```

Limit replacements per file:

```bash
sd -n 1 'old' 'new' file.txt
```

Case-insensitive matching:

```bash
sd -f i 'error' 'warning' file.txt
```

Process standard input without modifying a file:

```bash
printf '%s\\n' 'old value' | sd 'old' 'new'
```

File arguments are modified in place. Preview or inspect the target before changing it.
