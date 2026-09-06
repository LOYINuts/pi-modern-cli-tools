---
name: bat
description: Use bat for readable text display with syntax highlighting, line ranges, line numbers, standard input, and Git diffs.
---

# bat

For agent output, disable decorations and paging:

```bash
bat --style=plain --paging=never <file>
```

Useful views:

```bash
bat -n --paging=never <file>
bat --line-range 1:80 --paging=never <file>
bat --color=never --paging=never <file>
```

Read standard input:

```bash
<command> | bat --style=plain --paging=never
```

Set a filename for syntax detection when reading standard input:

```bash
<command> | bat --style=plain --paging=never --file-name=config.json
```

Show Git changes:

```bash
bat --diff --paging=never <file>
```

Always use `--paging=never` in unattended agent commands. Use `--color=never` when output will be machine-parsed.
