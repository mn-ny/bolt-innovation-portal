
import { useEffect } from "react";
import { useAnimationControls } from "framer-motion";
import { useInView } from "framer-motion";

/**
 * A custom hook that starts an animation when an element comes into view.
 * 
 * @param ref - The reference to the element to observe
 * @param animationControls - The animation controls from framer-motion
 * @param options - Options for the useInView hook
 */
export function useScrollAnimation(
  ref: React.RefObject<HTMLElement>,
  animationControls: ReturnType<typeof useAnimationControls>,
  options: {
    once?: boolean;
    amount?: number | "some" | "all";
    animationVariant?: string;
  } = {}
) {
  const { 
    once = true, 
    amount = 0.2, 
    animationVariant = "visible" 
  } = options;
  
  const isInView = useInView(ref, { once, amount });

  useEffect(() => {
    if (isInView) {
      animationControls.start(animationVariant);
    }
  }, [isInView, animationControls, animationVariant]);

  return isInView;
}
