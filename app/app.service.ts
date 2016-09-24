import { Injectable} from '@angular/core';

@Injectable()
export class CountryService {
    getCountryList(): Country[] {
        return [
            { Name: 'Sri Lanka', Capital: 'Colombo', CountryCode: 'lk' },
            { Name: 'India', Capital: 'New Delhi', CountryCode: 'in'  },
            { Name: 'Australia', Capital: 'Canberra', CountryCode: 'au'  },
            { Name: 'Malaysia', Capital: 'Kuala Lumpur', CountryCode: 'ma'  },
            { Name: 'Bulgaria', Capital: 'Sofia', CountryCode: 'ba'  },
            { Name: 'China', Capital: 'Beijing', CountryCode: 'ch'  },
            { Name: 'Canada', Capital: 'Ottawa', CountryCode: 'ca'  },
            { Name: 'Poland', Capital: 'Warsaw', CountryCode: 'pl'  },
            { Name: 'Romania', Capital: 'Bucharest', CountryCode: 'ro'  },
            { Name: 'Finland', Capital: 'Helsinki', CountryCode: 'fi'  },
            { Name: 'Georgia', Capital: 'Tbilisi', CountryCode: 'ge'  },
            { Name: 'Switzerland', Capital: 'Bern', CountryCode: 'ch'  },
            { Name: 'Ukraine', Capital: 'Kyiv', CountryCode: 'ua'  }
        ];
    }
}

export class Country {
    Name: string;
    Capital: string;
    CountryCode: string;

    constructor(name: string, capital: string){
        this.Name = name;
        this.Capital = capital;
    }
}