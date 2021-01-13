const Observable = require("@nativescript/core/data/observable").Observable;

function createViewModel(page) {
    const viewModel = new Observable();

    const data =
        "CSS Classes: \r\n---------------------\r\n" +
        page.className.replace(/\s/g, "\r\n");
    viewModel.set("data", data);

    return viewModel;
}

exports.createViewModel = createViewModel;
