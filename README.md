# Music Store Showcase - Web Application Requirements

## Overview
Develop a single-page web application that simulates a music store showcase by generating fake song information.

## Functional Requirements

### Language Selection
- Must include English (USA).
- Include at least one additional language/region (e.g., German (Germany) or Ukrainian (Ukraine)).

### Seed Configuration
- Allow the user to set a custom 64-bit seed value.
- Provide an option to generate a random seed.

### Likes Per Song
- The user specifies the average number of likes per song.
- Range: 0-10, with fractional values allowed (e.g., 3.7).
- Examples:
    - 0: no likes for any song.
    - 0.5: each song has either 1 like or 0 likes with 1:1 chances (on average, 1 like for every 2 songs).
    - 10: each song has exactly 10 likes.
- Fractional values must be implemented probabilistically to achieve the desired average.

## UI / UX
- Controls for language selection, seed configuration, and likes-per-song must be placed horizontally in a single row (toolbar).
- Data must update dynamically whenever parameters change (no Enter press, no extra buttons).
- Support two display modes:
    - Table View with pagination (no infinite scrolling).
    - Gallery View with infinite scrolling (no pagination; a batch in Gallery View is also called a page).
- Any change to generation parameters must:
    - Reset the Table View to the first page.
    - Reset the Gallery View to the initial scroll position.
- Data must be shown immediately on page load (no required input or button press).

## Generated Data
Each table row and each gallery card must contain:
- Sequence index: sequential number starting from 1 (1, 2, 3, ...).
- Song title: randomly generated.
- Artist: randomly generated (mix of band names and personal names).
- Album title: randomly generated, or the literal string `Single`.
- Genre: randomly generated.

## Authentication
- The application must function without requiring user registration or authentication.

## Language Independence
- You are not required to translate the same song between languages.
- Songs for different languages must be generated independently.

## Localization Rules
- The language of the song title, artist name, album title, and genre must match the selected language/region.
- Generated data should look realistic for the chosen language/region (it can be nonsensical, e.g., "Fast Carrot Plus" is OK).
- Placeholder text such as lorem ipsum is not acceptable.

## Parameter Independence
- All parameters (region, seed, likes) are independent.
- Changing one parameter does not reset the others, but:
    - Changing likes only updates the like counts; titles, artists, albums, genres, and covers stay the same.
- Likes, titles, artists, and albums must update dynamically in response to parameter changes.

## Table View
- Each record in the Table View must be expandable.
- The expanded view must be collapsible so the table returns to its original state without a full page reload.
- When the user clicks on a record, detailed information is displayed, including:
    - Album or single cover image (randomly generated), with:
        - The correct title rendered on the cover.
        - The correct artist name rendered on the cover.
        - A randomized background image or pattern.
    - Play button: allows playback of a short preview clip.
    - Some randomly generated review text.

## Song Generation
- You must generate actual random music that can be played directly in the browser.
- Songs must be reproducible: the same seed values must always generate the same audio output.

## Optional Requirements
- Add an Export button that generates a ZIP archive containing MP3 files.
    - Each file should be named using the corresponding song title, album title, and artist name.
- Implement lyrics display with live scrolling synchronized to the playback of the song.

## Implementation Notes

### Region-Specific Data
- Your code must not contain any hardcoded region-specific values, words, or other data.
- All locale-specific content must come from external resources (e.g., lookup tables, configuration files, localization datasets) so that languages/regions can be added, removed, or updated without modifying the source code.
- Note: when generating the code with AI, you may add hardcoded string arrays for speed.

### Architecture
- Do not store random data on the server; all data must be generated on the server side (not in the browser).
- The browser connects to a single server that provides a single page (batch) of data generated in memory.
- Generate DB migrations in a separate folder.
- No database is required for storing random data (a database may be used for lookup tables, but it is generally not the best approach here).

### Seeds
- When the user changes the seed, the generated data must update accordingly.
- The seed provided to the RNG algorithm should be a combination of:
    - the user-specified seed, and
    - the displayed page number.
- The exact method of combining seed and page number is not critical; a simple MAD operation is sufficient.
- Important: the same seed, when entered at any time, must produce identical data (reproducible across devices and dates).
- Changing the seed must change the generated data, but the same seed must always produce the same results.
- Adjusting likes must not alter generated titles, artists, or other core content:
    - these should depend solely on the seed value and the record index.

### Code Reuse
- You are required to use third-party libraries for random data generation (e.g., a port of Faker) and may need to extend them via supported APIs.
- Use appropriate libraries for music generation, infinite scrolling, and other required functionality.

## Additional Notes
- Data should look as realistic as possible, though it does not need to be semantically meaningful.
- Higher grades will be given to visually appealing, realistic titles and covers, and songs that sound like coherent melodies/rhythms rather than random pitch sequences.
- You are encouraged to use libraries that incorporate music theory, such as:
    - randomly selecting chord progressions for verses/choruses,
    - splitting notes into separate tracks with different instruments,
    - adjusting tempo,
    - rendering MIDI files,
    - applying audio effects like reverberation and echo.
- AI services may also be used to enhance generation.
- Manage scope and time: at minimum, a simple implementation generating random sequences of notes is acceptable.
