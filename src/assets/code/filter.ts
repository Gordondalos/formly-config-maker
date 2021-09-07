          filter: (term) => of(term ? this.filterTypes(term,
            this.normalize(this.optionsOperation)) : this.normalize(this.optionsOperation).slice()),
