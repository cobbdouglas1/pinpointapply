
// This file exports all UI components to simplify imports and make naming transitions easier

// Re-export from CustomCard.tsx (previously Card.tsx)
export {
  Card as CustomCard,
  CardHeader as CustomCardHeader,
  CardTitle as CustomCardTitle,
  CardDescription as CustomCardDescription,
  CardContent as CustomCardContent,
  CardFooter as CustomCardFooter
} from './CustomCard';

// Re-export from card.tsx (shadcn/ui components)
export {
  Card,
  CardHeader,
  CardFooter,
  CardTitle,
  CardDescription,
  CardContent
} from './card';
