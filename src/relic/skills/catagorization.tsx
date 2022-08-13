import { NamedRuleGroup, RuleGroup, RuleOperator } from "relic/rules";
import { ActivationElement } from "relic/skills/activations";
import { KeywordElement } from "relic/skills/keywords";

export type GroupType = 
| RuleGroup
| NamedRuleGroup
| RuleOperator;

export type GroupValueType =
| GroupType
| ElementType
| string;

export type ElementType = 
| KeywordElement
| ActivationElement;

export type ElementValueType = 
| GroupType
| string
| number;