
Single page app to search giphys from https://giphy.com/.

To run:
npm start

View in browser at:
localhost:3000

Cases to test:
Simple case: 'hello'
    Enter "hello" into input and click Search button
    -Verify giphy results displayed in grid
    -Verify only 'Next Page' button is visible 
    -Verify text says 'Displaying Results for: hello'
    -Verify text says 'Current result page 1 of {num}

    Click 'Next Page' button
    -Verify next set of giphy results are displayed
    -Verify both 'Prev Page' and 'Next Page' buttons are visible
    -Verify text says 'Displaying Results for: hello'
    -Verify text says 'Current result page 2 of {num}

    Click 'Prev Page' button
    -Verify console logs 'Loading from cache!'
    -Verify only 'Next Page' button is visible
    -Verify text says 'Displaying Results for: hello'
    -Verify text says 'Current result page 1 of {num}

    Enter "hello " inton input and click Search button
    -Verify console logs 'Loading  from cache!'
    -Verify only 'Next Page' button is visible
    -Verify text says 'Displaying Results for: hello'
    -Verify text says 'Current result page 1 of {num}

Multi-term search case: 'hello there'
    Enter "hello there" into input and click Search button
    -Verify giphy results displayed in grid
    -Verify only 'Next Page' button is visible 
    -Verify text says 'Displaying Results for: hello there'
    -Verify text says 'Current result page 1 of {num}

    Click 'Next Page' button
    -Verify next set of giphy results are displayed
    -Verify both 'Prev Page' and 'Next Page' buttons are visible
    -Verify text says 'Displaying Results for: hello there'
    -Verify text says 'Current result page 2 of {num}

    Click 'Prev Page' button
    -Verify console logs 'Loading from cache!'
    -Verify only 'Next Page' button is visible
    -Verify text says 'Displaying Results for: hello there'
    -Verify text says 'Current result page 1 of {num}

Empty search term case: '':
    Clear text from input and click Search button
    -Verify no error results
    -Verify that grid display doesn't change

End of results behavior:
    Enter 'batshit' into input and click Search button (haha has only 3 pages of results ><)
    -Verify giphy results displayed in grid
    -Verify only 'Next Page' button is visible 
    -Verify text says 'Displaying Results for: batshit'
    -Verify text says 'Current result page 1 of 3'

    Click 'Next Page' button to get to page 3 of 3
    -Verify that only 'Prev Page' button is displayed
    
