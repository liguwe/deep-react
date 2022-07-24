import type {IApi} from 'umi';

export default (api: IApi) => {
    api.modifyHTML(($) => {
        $('head').append([
            `<script src='https://cdn.jsdelivr.net/npm/jquery@3.2.1/dist/jquery.min.js'></script>`,
        ])
        return $;
    });
};
