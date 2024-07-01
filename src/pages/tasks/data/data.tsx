import {
  ArrowDownIcon,
  ArrowRightIcon,
  ArrowUpIcon,
  CheckCircledIcon,
  CircleIcon,
  CrossCircledIcon,
  QuestionMarkCircledIcon,
  StopwatchIcon,
} from '@radix-ui/react-icons'

export const labels = [
  {
    value: 'bug',
    label: 'Erro',
  },
  {
    value: 'feature',
    label: 'Recurso',
  },
  {
    value: 'documentation',
    label: 'Documentação',
  },
]

export const statuses = [
  {
    value: 'backlog',
    label: 'Backlog',
    icon: QuestionMarkCircledIcon,
  },
  {
    value: 'todo',
    label: 'A Fazer',
    icon: CircleIcon,
  },
  {
    value: 'in progress',
    label: 'Fazendo',
    icon: StopwatchIcon,
  },
  {
    value: 'done',
    label: 'Feito',
    icon: CheckCircledIcon,
  },
  {
    value: 'canceled',
    label: 'Cancelado',
    icon: CrossCircledIcon,
  },
]

export const priorities = [
  {
    label: 'Baixa',
    value: 'low',
    icon: ArrowDownIcon,
  },
  {
    label: 'Média',
    value: 'medium',
    icon: ArrowRightIcon,
  },
  {
    label: 'Alta',
    value: 'high',
    icon: ArrowUpIcon,
  },
]
