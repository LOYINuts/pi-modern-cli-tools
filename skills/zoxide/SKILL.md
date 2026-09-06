---
name: zoxide
description: Use zoxide for fuzzy directory navigation and directory database management.
---

# zoxide

Use `z` as a fuzzy directory navigation command when the shell has been initialized with zoxide.

```bash
z <keywords>
zi
```

`zi` is interactive. Avoid it in unattended agent commands.

Executable-level queries return a matched directory path:

```bash
zoxide query -- <keywords>
zoxide query --exclude <directory> -- <keywords>
```

Use the returned path in the same shell invocation as the next command:

```bash
cd "$(zoxide query -- project)" && eza -la
```

Manage the directory database:

```bash
zoxide add -- <path>
zoxide remove <path>
zoxide edit
```

Initialize Bash:

```bash
eval "$(zoxide init bash)"
```

Use `zoxide query` when the `z` shell function is unavailable. Use exact paths when fuzzy matching is not wanted. Directory changes do not persist across separate shell tool invocations.
