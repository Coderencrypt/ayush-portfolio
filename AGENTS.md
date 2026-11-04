<!-- LOVABLE:BEGIN -->

> [!IMPORTANT]
> This project is connected to [Lovable](https://lovable.dev). Avoid rewriting
> published git history — force pushing, or rebasing/amending/squashing commits
> that are already pushed — as it rewrites history on Lovable's side and the
> user will likely lose their project history.
>
> Commits you push to the connected branch sync back to Lovable and show up in
> the editor, so keep the branch in a working state.

<!-- LOVABLE:END -->

## Project rules

- Portfolio is a single home page (`src/routes/index.tsx`) composed of section components in `src/components/portfolio/`; nav uses in-page hash anchors because the owner asked for one homepage with all sections.
- All copy and data (projects, case studies, skills, process, links) live in `src/content/portfolio.ts`; section components stay presentational so content edits never touch layout.
- Project previews are code-built mock UIs (`ProjectPreview.tsx`) using design tokens, so they stay crisp and themeable without image assets.
- Colors, fonts and shadows come only from tokens in `src/styles.css`; button styles are cva variants in `src/components/ui/button.tsx`.
