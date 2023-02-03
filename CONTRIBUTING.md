# Welcome to Tribute contributing guide

First of all, thanks for taking your time to contribute to a Tribute project. It is an open-source project and it wouldn't be possible without people like you 🙏🎉

This document is a set of guidelines to help you contribute to any Tribute project. These aren’t absolute laws, use your judgment and common sense 😀.
Remember that if something here doesn't make sense, you can also propose a change to this document.

<!-- toc -->

- [Code of Conduct](#code-of-conduct)
- [How Can I Contribute?](#how-can-i-contribute)
  - [Reporting Bugs](#reporting-bugs)
  - [Suggesting Features](#suggesting-features)
  - [Improving documentation](#improving-documentation)
- [Your First Code Contribution](#your-first-code-contribution)
  - [Getting the code](#getting-the-code)
  - [Github flow](#github-flow)
  - [Publishing your Pull Request](#publishing-your-pull-request)
  - [Branch naming conventions](#branch-naming-conventions)
  - [Commit guidelines](#commit-guidelines)
- [Code Style Guidelines](#code-style-guidelines)
  - [Importing other files and libraries](#importing-other-files-and-libraries)
  - [Use `const` and `let`](#use-const-and-let)

<!-- tocstop -->

## Code of Conduct

This project and everyone participating in it are expected to uphold the [Tribute's Code of Conduct](https://github.com/TheTributeCommunity/fesbal-frontend/blob/main/CODE_OF_CONDUCT.md), based on the Covenant Code of Conduct.
If you see unacceptable behavior, please communicate so to any Tribute admin.

## How Can I Contribute?

Contributing to an open source project is never just a matter of code, you can help us significantly by just reporting issues, suggesting features and interacting with our community. Here you'll find some tips on how to do it effectively.

### Reporting Bugs

Before creating a bug report, please search for similar issues to make sure that they're not already reported. If you don't find any, go ahead and create an issue including as many details as possible. Fill out the required template, the information requested helps us to resolve issues faster.

> **Note**: If you find a Closed issue that seems related to the issues that you're experiencing, make sure to reference it in the body of your new one by writing its number like this => #42 (Github will autolink it for you).

Bugs are tracked as GitHub issues. Explain the problem and include additional details to help maintainers reproduce the problem:

- Use a clear and descriptive title for the issue to identify the problem.
- Describe the exact steps which reproduce the problem in as many details as possible.
- Provide specific examples to demonstrate the steps. Include snapshots of the app, or copy/pasteable snippets, which you use in those examples. If you're providing snippets in the issue, use Markdown code blocks.
- Describe the behavior you observed after following the steps and point out what exactly is the problem with that behavior.
- Explain which behavior you expected to see instead and why.
- If the problem is related to performance or memory, include a CPU profile capture with your report.

### Suggesting Features

Features suggestions are tracked as GitHub issues. Make sure you provide the following information:

- Use a clear and descriptive title for the issue to identify the suggestion.
- Provide a step-by-step description of the suggested enhancement in as many details as possible.
- Provide specific examples to demonstrate the steps. Include copy/pasteable snippets which you use in those examples, as Markdown code blocks.
- Describe the current behavior and explain which behavior you expected to see instead and why.
- Explain why this enhancement would be useful to most users and isn't something that can or should be implemented as a community package.
- List some other libraries or frameworks where this enhancement exists.

### Improving documentation

If you find something that is missing or can be improved, please contribute, it will be of great help for other developers.

#### Documentation principles and practices

The ultimate goal of a technical document is to translate the knowledge from the technology creators into the reader's mind so that they learn. The challenging
part here is the one in which they learn. It is challenging because, under the same amount of information, a person can suffer an information overload because
we (humans) don't have the same information-processing capacity. That idea is going to work as our compass, it should drive our efforts so people with less
capacity is still able to follow and understand our documentation.

To achieve our goal we propose writing documentation following these principles:

1. Clean and Clear
2. Simple
3. Coherent
4. Explicit
5. Attractive
6. Inclusive
7. Cohesive

##### Principles

**1. Clean and Clear**

Less is more. Apple is, among many others, a good example of creating clean and clear content, where visual elements are carefully chosen to look beautiful
(e.g. [Apple's swift UI](https://developer.apple.com/tutorials/swiftui)) and making the reader getting the point as soon as possible.

The intention of every section, paragraph, and sentence must be clear, we should avoid writing details of two different things even when they are related.
It is better to link pages and keep the focus and the intention clear, Wikipedia is the best example on this.

**2. Simple**

Technical writings deal with different backgrounds and expertise from the readers. We should not assume the reader knows everything we are talking about
but we should not explain everything in the same paragraph or section. Every section has a goal to stick to the goal and link to internal or external resources
to go deeper.

Diagrams are great tools, you know a picture is worth more than a thousand words unless that picture contains too much information.
Keep it simple intentionally omitting details.

**3. Coherent**

The documentation tells a story. Every section should integrate naturally without making the reader switch between different contexts. Text, diagrams,
and code examples should support each other without introducing abrupt changes breaking the reader’s flow. Also, the font, colors, diagrams, code samples,
animations, and all the visual elements we include, should support the story we are telling.

**4. Explicit**

Go straight to the point without assuming the readers should know about something. Again, link internal or external resources to clarify.

The index of the whole content must be visible all the time so the reader knows exactly where they are and what is left.

**5. Attractive**

Our text must be nice to read, our diagrams delectable to see, and our site… a feast for the eyes!!

**6. Inclusive**

Everybody should understand our writings, especially the topics at the top. We have arranged the documentation structure in a way that anybody can dig
deeper by just going down so, sections 1 to 4 must be suitable for all ages.

Use gender-neutral language to avoid the use of he, him, his to refer to undetermined gender. It is better to use their or they as a gender-neutral
approach than s/he or similars.

**7. Cohesive**

Writing short and concise sentences is good, but remember to use proper connectors (“Therefore”, “Besides”, “However”, “thus”, etc) that provide a
sense of continuation to the whole paragraph. If not, when people read the paragraphs, their internal voice sounds like a robot with unnatural stops.

For example, read this paragraph and try to hear your internal voice:

> Entities are created on the fly, by reducing the whole event stream. You shouldn't assume that they are stored anywhere.  Booster does create
automatic snapshots to make the reduction process efficient. You are the one in charge of writing the reducer function.

And now read this one:

> Entities are created on the fly by reducing the whole event stream. While you shouldn't assume that they are stored anywhere,  Booster does create automatic
snapshots to make the reduction process efficient. In any case, this is opaque to you and the only thing you should care is to provide the reducer function.

Did you feel the difference? The latter makes you feel that everything is connected, it is more cohesive.

##### Practices

There are many writing styles depending on the type of document. It is common within technical and scientific writing to use Inductive and/or Deductive styles
for paragraphs. They have different outcomes and one style may suit better in one case or another, that is why it is important to know them, and decide which
one to use in every moment. Let’s see the difference with 2 recursive examples.

**Deductive paragraphs ease the reading for advanced users but still allows you to elaborate on ideas and concepts for newcomers**. In deductive paragraphs,
the conclusions or definitions appear at the beginning, and then, details, facts, or supporting phrases complete the paragraph’s idea. By placing the
conclusion in the first sentence, the reader immediately identifies the main point so they can decide to skip the whole paragraph or keep reading.
If you take a look at the structure of this paragraph, it is deductive.

On the other hand, if you want to drive the readers' attention and play with it as if they were in a roller coaster, you can do so by using a different approach.
In that approach, you first introduce the facts and ideas and then you wrap them with a conclusion. This style is more narrative and forces the reader to
continue because the main idea is diluted in the whole paragraph. Once all the ideas are placed together, you can finally conclude the paragraph. **This style is
called Inductive.**

The first paragraph is deductive and the last one is inductive. In general, it is better to use the deductive style, but if we stick to one, our writing will start looking weird and maybe boring.
So decide one or another being conscious about your intention.

## Your First Code Contribution

Unsure where to begin contributing to a Tribute project? You can start by looking through issued tagged as `good-first-issue` and `help-wanted`:

- Beginner issues - issues which should only require a few lines of code, and a test or two.
- Help wanted issues - issues which should be a bit more involved than beginner issues.

Both issue lists are sorted by the total number of comments. While not perfect, number of comments is a reasonable proxy for impact a given change will have.

Make sure that you assign the chosen issue to yourself to communicate your intention to work on it and reduce the possibilities of other people taking the same assignment.

### Getting the code

To start contributing to the project you would need to set up the project in your system, to do so, you must first follow these steps in your terminal.

- Clone the repo and get into the directory of the project: `git clone <WRITE REPO URL HERE>`

- Install project dependencies: `npm install`

- Add your contribution

### Github flow

The preferred way of accepting contributions is following the [Github flow](https://guides.github.com/introduction/flow/), that is, you fork the project and work in your own branch until you're happy with the work, and then submit a PR in Github.

### Publishing your Pull Request

Make sure that you describe your change thoroughly in the PR body, adding references for any related issues and links to any resource that helps clarifying the intent and goals of the change.

When you submit a PR to a Tribute repository:

- Your code will be reviewed by one or two people. Clarifications or improvements might be asked, and they reserve the right to close any PR that do not meet the project quality standards, goals or philosophy, so it's always a good idea to discuss your plans in an issue or the Spectrum channel before committing to significant changes.
- Code must be mergeable and all conflicts solved before merging it.

### Branch naming conventions

In order to create a PR, you must create a branch from `main`. You should follow the GitFlow naming conventions, as detailed below:

- `feature-XXX/*` - PR that implements a new feature
- `fix-XXX/*` - PR that fixes a bug
- `doc-XXX/*` - PR that enhances the documentation
- `refactor-XXX/*` - PR that refactors curent code

Where the `XXX` is the issue number. In the right side of the branch name you can include the GitHub issue number. An example of doing this could be:

```bash
git checkout -b feature-XXX/add-an-awesome-new-feature
```

### Commit guidelines

We recommend commits to be as small as possible, just including one change/feature per comming. We also recommend following the [conventional commits](https://www.conventionalcommits.org/) standard:

```text
<commit type>([optional scope]): <description>
```

As an example:

```text
fix(cli): Correct minor typos in code
```

As general rules, our recommendations are the following:

- Keep commits short and frequent (several small commits are better than a big large one)
- Describe what you did on your commit message in PRESENT TENSE

## Code Style Guidelines

Any tribute project comes with a nice set of ESLint config files to help you follow a consistent style, and we really encourage to use it in your editor.

For everything else, the rule of thumb is: Try to be consistent with the code around yours, and if you're not sure, ask :)

There are some things that the linter doesn't force but are prefered this way:

### Importing other files and libraries

Use `import` instead of `require` and import the objects individually when possible:

```typescript
import { Object, function } from 'some-package'
```

### Use `const` and `let`

Default to `const` and immutable objects when possible, otherwise, use `let`.

```typescript
// Good
let a = 0
const b = 3
a = a + b

// Less Good
var c = 0
let d = 3 // Never updated
```
