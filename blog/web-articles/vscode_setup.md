# VS Code setup

### 1. VSCode does not auto format on save

1.1 Make sure that format on save is enabled: `CMD + SHIFT + P` > search for `Preferences: Open User Settings` > search for `format on save` > make sure  `Editor: Format on Save` is enabled

https://i.stack.imgur.com/xBmiH.png

1.2 Make sure your default formatter is set: `CMD + SHIFT + P` > search for `Preferences: Open User Settings` > search for `default formatter`

Make sure your `Editor: Default Formatter` field is not `null` but rather `esbenp.prettier-vscode` and that all the languages below are ticked.

https://i.stack.imgur.com/DINkP.png

1.3 Make sure Prettier - Code formatter is selected as default Formatter: `CMD + SHIFT + P` > search for `Format Document with` > `Configure Default Formatter...` > choose `Prettier - Code formatter`

1.4 Check if Prettier has some other issues: Sometimes, prettier stops working when there are other issues. You can view the errors by clicking on the `Prettier` button on the bottom right corner beside of your editor

https://i.stack.imgur.com/Zd03Y.png

1.5 Create a .prettierrc.json file as a config file [Configuration File](https://prettier.io/docs/en/configuration.html)