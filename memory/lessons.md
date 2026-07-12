# Lessons

- 2026-07-12: Do not use `getByText` for shared nav labels when the layout intentionally renders desktop and mobile copies at once. I assumed each label would be unique, which made the regression test fail after the app itself was already fixed. Rule: when duplicate UI text is expected, use `getAllByText` or scope the query to the specific container.
