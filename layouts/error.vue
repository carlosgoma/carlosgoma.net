<template>

    <div class="p-error">
        <header class="p-error__header">
            <h2 class="p-error__title">
                <span>Error :_(</span>
            </h2>
        </header>
    </div>

</template>

<style lang="scss" scoped>
    .p-error {
        display: grid;
        align-items: flex-end;
		height: 100%;

        &__header {
            padding: space(vh) space(m);
        }
        &__title {
            font-size: font-size(xl);
            line-height: 1.2;
            display: inline-flex;
            flex-direction: column;
            position: relative;
            z-index: 2;
            pointer-events: none;
        }

        & + .c-draggable .c-draggable__item {

            &:nth-child(1) svg {
                transform: rotate(-90deg);
            }
            &:nth-child(3) svg {
                transform: rotate(90deg);
            }
            &:nth-child(4) svg {
                transform: rotate(180deg);
            }
        }
    }

</style>
