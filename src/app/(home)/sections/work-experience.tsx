import GridContainer from '@/components/ui/grid-container';
import PatternContainer from '@/components/ui/pattern-container';

export default function WorkExperience() {
  return (
    <GridContainer className="">
      <GridContainer direction="to-bottom">
        <PatternContainer className="px-2 md:px-0">
          <p className="mb-4 font-medium">Work</p>
        </PatternContainer>
      </GridContainer>
      <div className="px-2 md:px-0">
        <div className="flex items-center gap-2">
          <p className="font-medium">Tata Consultancy Services</p>
        </div>
        <div className="relative pb-4 pl-[24px] text-muted-foreground">
          <div className="absolute left-[3px] h-[44px] w-[1.5px] bg-muted-foreground" />
          <div className="absolute left-[3px] top-4 h-[calc(100%-8px)] w-[1.5px] bg-muted-foreground" />
          <div className="relative pt-4 text-base">
            <div className="absolute -left-[21px] h-3 w-4 rounded-bl-lg border-b-[1.99px] border-l-[1.99px] border-muted-foreground" />
            <p className="font-medium">SDE | Innovator Cadre</p>
            <p className="text-xs">
              <>
                Jul 2022{/* */} -{/* */} {/* */}Feb 2024{/* */} {/* */}(1 yr, 7
                m){/* */}{' '}
                <span className="font-normal capitalize">
                  • {/* */}kolkata, west bengal, india
                </span>{' '}
              </>
            </p>
          </div>
        </div>
        <div className="relative pb-4 pl-[24px] text-muted-foreground">
          <div className="relative pt-1 text-base">
            <div className="absolute -left-[21px] h-3 w-4 rounded-bl-lg border-b-[1.99px] border-l-[1.99px] border-muted-foreground" />
            <p className="font-medium">SDE | Digital Cadre</p>
            <p className="text-xs">
              <>
                Jul 2022{/* */} -{/* */} {/* */}Feb 2024{/* */} {/* */}(1 yr, 7
                m){/* */}{' '}
                <span className="font-normal capitalize">
                  • {/* */}kolkata, west bengal, india
                </span>{' '}
              </>
            </p>
          </div>
        </div>
      </div>
    </GridContainer>
  );
}
