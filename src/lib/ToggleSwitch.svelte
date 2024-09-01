<h1> Toggle </h1>

<label>
    <input type="checkbox" role="switch" />
    <span>My switch</span>
</label>

<style lang="scss">
@use "$styles/theme" as *;

input:where([type="checkbox"][role="switch"]) {
    appearance: none;
    position: relative;
    font-size: inherit;
    width: 2em;
    height: 1em;
    box-sizing: content-box;
    border-width: 1px;
    border-style: solid;
    border-radius: 1em;
    vertical-align: text-bottom;
    margin: auto;
    color: inherit;

    &::after,
    &::before {
        content: "";
        position: absolute;
        top: 50%;
        left: 0;
        transform: translate(0, -50%);
        box-sizing: border-box;
        width: 0.7em;
        height: 0.7em;
        margin: 0 0.15em;
        border-width: 1px;
        border-style: solid;
        border-radius: 0.8em;
        background: currentcolor;
    }

    &::after {
        visibility: hidden;
    }

    &:checked::after {
        opacity: 0;
        transition:
            opacity 0ms step-start 0ms;
    }

    &:not(:checked)::after {
        opacity: 1;
        transition:
            opacity 0ms step-start 400ms;
    }

    &:checked::before {
        left: 1em;
        opacity: 1;
        animation-name: toggleSlide;
        animation-duration: 400ms;
        transition:
            left 400ms ease 0ms,
            width 0ms ease 0ms,
            opacity 0ms step-start 0ms;
    }

    &:not(:checked)::before {
        animation-name: toggleSlideBack;
        animation-duration: 400ms;
        opacity: 0;
        transition:
            left 400ms ease 0ms,
            width 0ms ease 0ms,
            opacity 0ms step-start 400ms;
    }
}

@keyframes toggleSlide {
    0% {
        width: 0.7em;
    }
    33% {
        width: 0.8em;
    }
    100% {
        width: 0.7em;
    }
}

@keyframes toggleSlideBack {
    0% {
        width: 0.7em;
    }
    33% {
        width: 0.8em;
    }
    100% {
        width: 0.7em;
    }
}
</style>