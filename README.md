## Entangled Computing Lab Website Update Manual

### Add publication

1. Go to `files/docs/group_ref.bib` and add bibtex entry (preferably cleaned)
    - If there is a previous version already in the bibtex file, remove it.
    - If the bibtex entry does not contain information either on `year` and `month`, please add both as it impacts the sorting algorithm for displaying the publications in the correct order.
1. Check if all authors in the group are found in `files/docs/names.txt`. This determines which names are underlined.

### Add news 

1. Put image in `files/images/news` folder if applicable
1. Go to `files/docs/news.json` and add an entry in the following format:
```json
{
    "headline": "<required>",
    "description": "<empty-string-if-not-applicable>",
    "date": "<required>",
    //The following two fields are optional and can be directly omitted if not used.
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
    "quote": "<empty-string-if-not-applicable>",
    "links": {
        "<fa-icon-code>": "<url>",
        "<fa-icon-code>": "<url>"
        //Leave blank if no links are provided, but the links field should still be present
    }
}
```

_Note: New categories can be added directly as well._

### Add new secondary members 

1. Go to `files/docs/other_members.json` and add an entry in the following format under correct category:
```json
{
    "name": "<required>",
    "details": "<empty-string-if-not-applicable>",
    "whereabouts": "<empty-string-if-not-applicable>"
}
```

_Note: New categories can be added directly as well._


