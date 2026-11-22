# Tiny Stack VM

A faithful interpreter of make.fun's tiny stack ISA (kit's
`generator/subject/ISA.md`): 32-bit wrapping integers, a 256-value stack,
branches, calls, 256 words of memory, ten traps each with its own exit code,
a 1,000,000 step limit and a 65,536 byte output limit.

Run `node main.ts`: reads every instance under `/input/<id>/`, writes
`/output/<id>/stdout.bin` and `/output/<id>/exit.txt` for each. Deterministic.
