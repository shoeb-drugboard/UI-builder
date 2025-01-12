import { Button } from '@nextui-org/react';

type ButtonProps = React.ComponentProps<typeof Button>;


export const ButtonComponent = ({ variant, color, children }: ButtonProps) => {
    return (
        <Button variant={variant} color={color}>
            {children}
        </Button>
    );
}
