<template lang="pug">
  .system__sidebar
    .system__sidebar-logos
      a.system__sign(href='/index.pug')
        img(src='/images/winvestor-sign.svg')
      a.system__sign(href='#top')
        img(src='/images/ids-sign.svg')

    .system__sidebar-nav
      .system__sidebar-nav-link
        a(href='#principles') Принципы
      .system__sidebar-nav-link.inner
        a(href='#namespace') Пространство имён
      .system__sidebar-nav-link.inner
        a(href='#units') Размерности

    .system__sidebar-nav
      .system__sidebar-nav-link
        a(href='#variables') Переменные
      .system__sidebar-nav-link.inner
        a(href='#typography') Типографика
      .system__sidebar-nav-link.inner
        a(href='#color') Цвет

    .system__sidebar-nav
      .system__sidebar-nav-link
        a(href='#components') Компоненты
      .system__sidebar-nav-link.inner
        a(href='#editorial') Редакционные форматы
      .system__sidebar-nav-link.inner
        a(href='#ui') Элементы интерфейса
</template>

<style lang="postcss">
  .system__sidebar {
    position: sticky;
    width: 13em;
    top: 0;
    left: 0;
    padding: var(--ids__default-padding);
    z-index: 10000;

    @media screen and (--ids-mobile) {
      display: none;
    }

    .system__sidebar-logos {
      display: flex;
      margin-left: -0.1em;

      .system__sign {
        position: relative;
        margin-right: -1.5em;
        margin-bottom: 1em;
        z-index: 1;
        border-bottom: 0;

        &:hover {
          z-index: 2;
        }
        & img {
          width: auto;
          height: 2.5em;
        }

        &.rounded {
          overflow: hidden;
          border-radius: 50%;
        }
      }
    }

    .system__sidebar-nav {
      margin-bottom: 0.8em;

      .system__sidebar-nav-link {
        margin-bottom: 0.3em;
        font-weight: bold;

        &.inner {
          font-weight: normal;
          position: relative;
          padding-left: calc(var(--ids__density) * 0.6em);

          &:before {
            position: absolute;
            left: -0.1em;
            content: '⋅ ';
          }
        }
      }
    }
  }
</style>
