## Entangled Computing Lab Website Update Manual

### Add publication

1. Go to `files/docs/group_ref.bib` and add bibtex entry (preferably cleaned)
    - If there is a previous version already in the bibtex file or in the `files/docs/select_ref.bib` file, remove it.
    - If the bibtex entry does not contain information either on `year` and `month`, please add both as it impacts the sorting algorithm for displaying the publications in the correct order.
1. Check if all authors in the group are found in `files/docs/names.txt`. This determines which names are underlined.

### Add news 

1. Put image in `files/images/news` folder if applicable
1. Go to `files/docs/news.yml` and add an entry in the following format:
```yml
- headline: <required-text>
  date: <yyyy-mm-dd>
  # Below is optional, omit if not needed
  description: <text>
  image: <path-to-image>
  links: # The following three fields are all required if links are provided.
  - icon: <fa-icon> # See FontAwesome
    description: <text>
    href: <url>
```

### Add new primary members 

1. Resize portrait picture to 512x512 pixels
1. Put image in `files/images/people` folder 
1. Go to `files/docs/main_members.yml` and add an entry in the following format under correct category:
```yaml
- name: <required-text>
  role: <required-text>
  image: <path-to-image>
  # Below is optional, omit if not needed
  quote: <text>
  links:
  - icon: <fa-icon-code>
    href: <url>
  - icon: <fa-icon-code>
    href: <url>
```

_Note: New categories can be added directly as well._

### Add new secondary members 

1. Go to `files/docs/other_members.yml` and add an entry in the following format under correct category:
```yml
- name: <required-text>
  details: <required-text>
  # Below is optional, omit if not needed
  whereabouts: <text>
```

_Note: New categories can be added directly as well._


