module.exports = {
    "settings": {
        "react": {
            "version": "detect"
        }
    },
    "env": {
        "browser": true,
        "es2021": true
    },
    "extends": [
        "standard-with-typescript",
        "plugin:react/recommended",
        "plugin:i18next/recommended"
    ],
    "overrides": [
        {
            "env": {
                "node": true
            },
            "files": [
                ".eslintrc.{js,cjs}"
            ],
            "parserOptions": {
                "sourceType": "script"
            }
        },
        {
            "files": ['**/src/**/*.test.{ts,tsx}'],
            "rules": {
                'i18next/no-literal-string': 'off'
            }
        }
    ],
    "parserOptions": {
        "project": 'tsconfig.eslint.json',
        "ecmaVersion": "latest",
        "sourceType": "module"
    },
    "plugins": [
        "react",
        "i18next"
    ],
    "rules": {
        "react/react-in-jsx-scope": "off",
        "@typescript-eslint/explicit-module-boundary-types": ["off"],
        "@typescript-eslint/explicit-function-return-type": "off",
        "@typescript-eslint/naming-convention": "off",
        "@typescript-eslint/strict-boolean-expressions": "off",
        "react/display-name": "off"
    }
}
