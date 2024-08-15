## Entangled Computing Lab Website Update Manual

### Add publication

1. Go to `files/docs/group_ref.bib` and add bibtex entry (preferably cleaned)
    - If there is a previous version already in the bibtex file or in the `files/docs/select_ref.bib` file, remove it.
    - If the bibtex entry does not contain information either on `year` and `month`, please add both as it impacts the sorting algorithm for displaying the publications in the correct order.
1. Check if all authors in the group are found in `files/docs/names.txt`. This determines which names are underlined.

### Add news 

1. Put image in `files/images/news` folder if applicable
1. Go to `files/docs/news.json` and add an entry in the following format:
```json
{
    "headline": "<required>",
    "date": "<required>",
    //The following three fields are optional and can be directly omitted if not used.
    "description": "<text>",
    "links":[
        {
            "icon": "<fa-icon-code>", //see FontAwesome for icon list and entry code
            "description": "<required>",
            "href": "<url>"
        }
    ],
    "image": "<path-to-image>"
}
```

### Add new primary members 

1. Resize portrait picture to 512x512 pixels
1. Put image in `files/images/people` folder 
1. Go to `files/docs/main_members.json` and add an entry in the following format under correct category:
```json
{
    "name": "<required>",
    "role": "<required>",
    "image": "<path-to-image>",
    //The following two fields are optional and can be directly omitted if not used.
    "quote": "<text>",
    "links": {
        "<fa-icon-code>": "<url>",
        "<fa-icon-code>": "<url>"
    }
}
```

_Note: New categories can be added directly as well._

### Add new secondary members 

1. Go to `files/docs/other_members.json` and add an entry in the following format under correct category:
```json
{
    "name": "<required>",
    "details": "<required>",
    //The following fields is optional and can be directly omitted if not used.
    "whereabouts": "<text>"
}
```

_Note: New categories can be added directly as well._


