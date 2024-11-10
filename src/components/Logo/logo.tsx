import { SvgIconTypeMap } from "@mui/material";
import { OverridableComponent, OverrideProps } from "@mui/material/OverridableComponent";

declare const Logo: OverridableComponent<SvgIconTypeMap> & { muiName: string };

export type SvgIconProps<
  RootComponent extends React.ElementType = SvgIconTypeMap['defaultComponent'],
  AdditionalProps = {},
> = OverrideProps<SvgIconTypeMap<AdditionalProps, RootComponent>, RootComponent> & {
  component?: React.ElementType;
};

export default Logo;