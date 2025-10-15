export class DynamicBarModel {
    name: string = '';
    level?: number;
    certificate?: string;
}

export class SkillGroup {
    group?: string;
    skills?: DynamicBarModel[];
    groupSkill?: SkillGroup[];
}