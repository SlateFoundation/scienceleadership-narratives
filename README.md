# scienceleadership-narratives

Extends term reports with Science Leadership Academy schools' narrative prompts

## Adding to a school site

1. Create `scienceleadership-narratives` source using `master` branch:

    ```bash
    git holo source create https://github.com/SlateFoundation/scienceleadership-narratives --ref=master
    ```

1. Create `.holo/branches/emergence-site/_scienceleadership-narratives.toml` to map all content in the `emergence-layer` holobranch into the root of your site projection:

    ```toml
    [holomapping]
    holosource="=>emergence-layer"
    files = "**"
    ```
