# Conflict Resolution Report

## Scenario
As part of CheckPoint 2, I created two branches named `conflict-A` and `conflict-B` to intentionally simulate a merge conflict. In the `conflict-A` branch, I modified the file `about.html` and added the line `<p>Change from branch A</p>`. In the `conflict-B` branch, I also modified the same `about.html` file but added `<p>Change from branch B</p>`. When I attempted to merge both branches into `main`, GitHub flagged the merge as having a conflict because both edits touched the same part of the same file.

## Why the Conflict Happened
This conflict happened because Git could not automatically decide which change to keep. When two branches edit the same line or section of a file in different ways, Git marks the file as conflicted. In this case, the `about.html` file contained two different versions of the same section of code, which GitHub could not automatically merge.

## Resolution Process
To resolve the conflict, I opened a Pull Request for `conflict-A` after already merging `conflict-B`. GitHub displayed the conflict markers in the editor:

