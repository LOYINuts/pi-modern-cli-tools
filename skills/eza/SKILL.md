---
name: eza
description: Use eza for directory listings, tree views, metadata, sorting, and Git-aware listings.
---

# eza

Basic listings:

```bash
eza --color=never --icons=never
eza -la --color=never --icons=never
```

Tree and filters:

```bash
eza --tree --level=2 --color=never --icons=never
eza -D --color=never --icons=never
eza -f --color=never --icons=never
```

Git-aware listings:

```bash
eza --git --color=never --icons=never
eza --git-ignore --color=never --icons=never
```

Sorting:

```bash
eza -l --sort=size --color=never --icons=never
eza -l --sort=modified --color=never --icons=never
```

Use `--color=never --icons=never` when output will be parsed or passed to another command. Use `--level` with `--tree` to bound recursive output.
