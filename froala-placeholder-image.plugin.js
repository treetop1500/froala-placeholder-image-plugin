/**
 * Created by Robert Wade on 9/2/16.
 */
// Define an icon.
$.FroalaEditor.DefineIcon('placeHoldIcon', { NAME: 'paw'})

// Define a dropdown button.
$.FroalaEditor.RegisterCommand('placeHoldDropdown', {
    // Button title.
    title: 'PLaceholder Images',

    // Mark the button as a dropdown.
    type: 'dropdown',

    // Specify the icon for the button.
    // If this option is not specified, the button name will be used.
    icon: 'placeHoldIcon',

    // Options for the dropdown.
    options: {
        "http://loremflickr.com/600/600/dog" : "Dog Square",
        "http://loremflickr.com/400/600/dog" : "Dog Portrait",
        "http://loremflickr.com/600/400/dog" : "Dog Landscape",

        "http://www.fillmurray.com/600/600" : "Fillmurray Square",
        "http://www.fillmurray.com/400/600" : "Fillmurray Portrait",
        "http://www.fillmurray.com/600/400" : "Fillmurray Landscape",

        "http://placezombie.com/600x600 " : "Zombie Square",
        "http://placezombie.com/400x600"  : "Zombie Portrait",
        "http://placezombie.com/600x400"  : "Zombie Landscape",

        "http://www.placecage.com/600/600" : "Cage Square",
        "http://www.placecage.com/400/600" : "Cage Portrait",
        "http://www.placecage.com/600/400" : "Cage Landscape",

        "http://www.placekitten.com/600/600" : "Kitten Square",
        "http://www.placekitten.com/400/600" : "Kitten Portrait",
        "http://www.placekitten.com/600/400" : "Kitten Landscape"
    },

    // If present, the options property will be ignored.
    // It can be used to define a custom HTML for the dropdown.
    //html: function () {
        // The current context is the editor instance.
    //    return '';
    //},

    // Save the dropdown action into undo stack.
    undo: true,

    // Focus inside the editor before callback.
    focus: true,

    // Refresh the button state after the callback.
    refreshAfterCallback: true,

    // Callback.
    callback: function (cmd, val, params) {
        // The current context is the editor instance.
        //this.html.insertImageHTML("<img src='" + val + '" />');
        this.html.insert("<img src='"+ val + "' />");
        this.undo.saveStep();
    },

    // Called when the dropdown button state might have changed.
    refresh: function ($btn) {
        // The current context is the editor instance.
        //console.log ($btn.selection);
    },

    // Called when the dropdown is shown.
    refreshOnShow: function ($btn, $dropdown) {
        // The current context is the editor instance.
        //console.log (this.selection.element());
    }
});