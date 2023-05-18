export interface CountryDTO {
  id: number
  name: string
  code: string
}

export interface InvestorDTO {
  id: number
  logo: LogoDTO
  name: string
  description?: string
  countries: CountryDTO[]
  hqs: CountryDTO[]
  sectors: SectorDTO[]
  stages: StageDTO[]
}

export interface LogoDTO {
  url: string
  name: string
}

export interface SectorDTO {
  id: number
  code: string
  name: string
}

export interface StageDTO {
  id: number
  name: string
}
