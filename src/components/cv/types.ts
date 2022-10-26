export interface CvDataPerson {
  readonly avatarImg: string;
  readonly fullName: string;
  readonly dateOfBirth: string;
  readonly nationality: string;
  readonly phoneNumber: string | null;
  readonly email: string;
  readonly website: string;
  readonly addressLine1: string;
  readonly addressLine2: string;
  readonly addressLine3: string;
}

export interface CvJob {
  readonly dateStarted: string;
  readonly dateFinished: string;
  readonly position: string;
  readonly company: string;
  readonly location: string;
  readonly description: readonly string[];
  readonly buzzwords: readonly string[];
}

export interface CvSideProject {
  readonly description: string;
  readonly title: string;
  readonly url: string;
}

export interface CvSkillLanguage {
  readonly level: string;
  readonly name: string;
}

export interface CvEducation {
  readonly dateFinished: string;
  readonly dateStarted: string;
  readonly faculty: string;
  readonly fieldOfStudy: string;
  readonly university: string;
}

export interface CvSkill {
  readonly iAm: readonly string[];
  readonly iLove: readonly string[];
  readonly languages: readonly CvSkillLanguage[];
  readonly other: readonly string[];
}

export interface CvData {
  readonly qrCodeValue: string;
  readonly person: CvDataPerson;
  readonly jobs: readonly CvJob[];
  readonly sideProjects: readonly CvSideProject[];
  readonly skills: CvSkill;
  readonly education: readonly CvEducation[];
}
