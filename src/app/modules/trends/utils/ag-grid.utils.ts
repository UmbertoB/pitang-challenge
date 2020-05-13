function stargazersFormatter(params) {
    return params.value > 1000 ? (params.value / 1000).toFixed(0) + 'k' : params.value;
}

function customCellRendererFunc(params): string {
    return `<img src="${params.value}" style="width: 30%;border-radius: 50px;margin-top:5px"/>`;
}

export const columnDefs = {
    developers: [
        { headerName: 'Nome', field: 'avatar', sortable: true, filter: true, cellRenderer: customCellRendererFunc },
        { headerName: 'Nome', field: 'name', sortable: true, filter: true },
        { headerName: 'Usuário', field: 'username', sortable: true, filter: true },
        { headerName: 'Repositório Popular', field: 'repo.name', sortable: true, filter: true },
    ],
    repositories: [
        { headerName: 'Nome', field: 'name', sortable: true, filter: true },
        { headerName: 'Linguagem', field: 'language', sortable: true, filter: true },
        { headerName: 'Stars total', field: 'stars', valueFormatter: stargazersFormatter, sortable: true, filter: true },
        { headerName: 'Stars no Período', field: 'currentPeriodStars', valueFormatter: stargazersFormatter, sortable: true, filter: true },
    ],
};
