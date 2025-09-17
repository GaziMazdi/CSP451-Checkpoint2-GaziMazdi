
---

## 📄 `docs/workflow-report.md`
```markdown
# Workflow Report

## Branching
For CheckPoint 2, I created three main feature branches in addition to the main branch.  
- `feature/user-authentication`: implemented login form and basic validation.  
- `feature/database-connection`: added a database module with CRUD operations.  
- `feature/api-endpoints`: created REST API endpoints for handling requests.  

Each branch contained at least three commits and more than 50 lines of functional code.

## Pull Requests
For each feature branch, I created a Pull Request into `main`. Each PR included a descriptive title, a checklist of requirements, and the related commits. This provided clear documentation of what each branch contributed.

## Reviews
To simulate collaboration, I added inline review comments and requested changes on one of the PRs. After pushing a small fix, I marked the PR as ready for re-review. Finally, I merged the PRs using **squash and merge** to keep the commit history clean and organized.

## Conflict Handling
I also created two branches (`conflict-A` and `conflict-B`) that modified the same file to intentionally produce a merge conflict. The conflict was documented, resolved manually through GitHub’s conflict editor, and explained in the `conflict-resolution.md` file.

## Final Integration
After merging all branches and resolving conflicts, the repository contained a complete history of branching, pull requests, reviews, and merges. This workflow demonstrated the use of Git branching strategies, collaboration via PRs, and handling of merge conflicts.

