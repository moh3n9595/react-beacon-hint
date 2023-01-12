// {/* <div className='card'>
// 					<span className='title'>Outline Beacon</span>
// 					<div className='content'>
// 						<div className='content-item'>
// 							<div className='component'>
// 								<OutlineBeacon size={50} />
// 							</div>
// 							<code>size={50}</code>
// 						</div>
// 						<div className='content-item'>
// 							<div className='component'>
// 								<OutlineBeacon />
// 							</div>
// 							<code>default</code>
// 						</div>
// 						<div className='content-item'>
// 							<div className='component'>
// 								<OutlineBeacon color='green' />
// 							</div>
// 							<code>{"color='green'"}</code>
// 						</div>
// 						<div className='content-item'>
// 							<div className='component'>
// 								<OutlineBeacon style={{opacity: 0.5}} />
// 							</div>
// 							<code>{'style={{opacity: 0.5}}'}</code>
// 						</div>
// 						<div className='content-item'>
// 							<div className='component'>
// 								<OutlineBeacon className='test-class' />
// 							</div>
// 							<code>{"className='test-class'"}</code>
// 						</div>
// 					</div>
// 				</div>
// 				<div className='card'>
// 					<span className='title'>Fill Beacon</span>
// 					<div className='content'>
// 						<div className='content-item'>
// 							<div className='component'>
// 								<FillBeacon size={40} />
// 							</div>
// 							<code>size={50}</code>
// 						</div>
// 						<div className='content-item'>
// 							<div className='component'>
// 								<FillBeacon />
// 							</div>
// 							<code>default</code>
// 						</div>
// 						<div className='content-item'>
// 							<div className='component'>
// 								<FillBeacon color='green' />
// 							</div>
// 							<code>{"color='green'"}</code>
// 						</div>
// 						<div className='content-item'>
// 							<div className='component'>
// 								<FillBeacon style={{opacity: 0.5}} />
// 							</div>
// 							<code>{'style={{opacity: 0.5}}'}</code>
// 						</div>
// 						<div className='content-item'>
// 							<div className='component'>
// 								<FillBeacon className='test-class' />
// 							</div>
// 							<code>{"className='test-class'"}</code>
// 						</div>
// 					</div>
// 				</div>
// 				<div className='card'>
// 					<span className='title'>Floating</span>
// 					<div className='content'>
// 						<div className='content-item'>
// 							<div className='component'>
// 								<Floating floatingComponent={<OutlineBeacon />} open placement='right'>
// 									<div className='box'>One</div>
// 								</Floating>
// 							</div>
// 							<code>{'floatingComponent={<OutlineBeacon />}'}</code>
// 							<code>{"placement='right'"}</code>
// 						</div>
// 						<div className='content-item'>
// 							<div className='component'>
// 								<Floating floatingComponent={<OutlineBeacon />} open placement='left-start'>
// 									<div className='box'>Two</div>
// 								</Floating>
// 							</div>
// 							<code>{'floatingComponent={<OutlineBeacon />}'}</code>
// 							<code>{"placement='left-start'"}</code>
// 							<code>{'open'}</code>
// 						</div>
// 						<div className='content-item'>
// 							<div className='component'>
// 								<Floating floatingComponent={<FillBeacon />} open placement='right-end'>
// 									<div className='box'>Three</div>
// 								</Floating>
// 							</div>
// 							<code>{'floatingComponent={<OutlineBeacon />}'}</code>
// 							<code>{"placement='right-end'"}</code>
// 							<code>{'open'}</code>
// 						</div>
// 						<div className='content-item'>
// 							<div className='component'>
// 								<Floating floatingComponent={<OutlineBeacon />} open={false} placement='left'>
// 									<div className='box'>Four</div>
// 								</Floating>
// 							</div>
// 							<code>{'floatingComponent={<OutlineBeacon />}'}</code>
// 							<code>{"placement='left'"}</code>
// 							<code>{'open={false}'}</code>
// 						</div>
// 						<div className='content-item'>
// 							<div className='component'>
// 								<Floating
// 									floatingComponent={<FillBeacon />}
// 									open
// 									placement='left'
// 									disablePortal
// 									middleware={[offset(-10)]}
// 								>
// 									<div className='box'>Five</div>
// 								</Floating>
// 							</div>
// 							<code>{'floatingComponent={<FillBeacon />}'}</code>
// 							<code>{"placement='left'"}</code>
// 							<code>{'open'}</code>
// 							<code>{'disablePortal'}</code>
// 							<code>{'middleware={[offset(-10)]}'}</code>
// 						</div>
// 						<div className='content-item'>
// 							<div className='component'>
// 								<Floating
// 									floatingComponent={() => <OutlineBeacon />}
// 									open
// 									placement='top'
// 									animatePresenceProps={{initial: true}}
// 								>
// 									<div className='box'>Six</div>
// 								</Floating>
// 							</div>
// 							<code>{'floatingComponent={() => <OutlineBeacon />}'}</code>
// 							<code>{"placement='top'"}</code>
// 							<code>{'open'}</code>
// 							<code>{`animatePresenceProps={{initial: true}}`}</code>
// 						</div>
// 						<div className='content-item'>
// 							<div className='component'>
// 								<Floating floatingComponent={<OutlineBeacon />} open={popperElemSevenIsVisible} placement='left'>
// 									<div className='box'>Seven</div>
// 								</Floating>
// 							</div>
// 							<code>{'floatingComponent={<OutlineBeacon />}'}</code>
// 							<code>{"placement='left'"}</code>
// 							<code>{'open={/* trigger with interval */}'}</code>
// 						</div>
// 						<div className='content-item'>
// 							<div className='component'>
// 								<Floating
// 									floatingComponent={<OutlineBeacon />}
// 									open={popperElemEightIsVisible}
// 									placement='top'
// 									animateProps={{
// 										initial: {scale: 0},
// 										animate: {scale: 1},
// 										exit: {scale: 0},
// 									}}
// 								>
// 									<div className='box'>Eight</div>
// 								</Floating>
// 							</div>
// 							<code>{'floatingComponent={<OutlineBeacon />}'}</code>
// 							<code>{"placement='top'"}</code>
// 							<code>{'open={/* trigger with interval */}'}</code>
// 							<code>{`animateProps={{
//           initial: {scale: 0},
//           animate: {scale: 1},
//           exit: {scale: 0},
//         }}`}</code>
// 						</div>
// 						<div className='content-item'>
// 							<div className='component'>
// 								<Floating floatingComponent={<FillBeacon />} initialOpen={false} placement='right-start'>
// 									<div className='box'>Nine</div>
// 								</Floating>
// 							</div>
// 							<code>{'floatingComponent={<FillBeacon />}'}</code>
// 							<code>{"placement='right-start'"}</code>
// 							<code>{'initialOpen={false}'}</code>
// 						</div>
// 						<div className='content-item'>
// 							<div className='component'>
// 								<Floating floatingComponent={<FillBeacon />} initialOpen placement='right-end'>
// 									<div className='box'>Ten</div>
// 								</Floating>
// 							</div>
// 							<code>{'floatingComponent={<FillBeacon />}'}</code>
// 							<code>{"placement='right-end'"}</code>
// 							<code>{'initialOpen'}</code>
// 						</div>
// 						<div className='content-item'>
// 							<div className='component'>
// 								<Floating floatingComponent={<FillBeacon />} placement='top-end' hoverProps={{delay: 1000}}>
// 									<div className='box'>Eleven</div>
// 								</Floating>
// 							</div>
// 							<code>{'floatingComponent={<FillBeacon />}'}</code>
// 							<code>{"placement='top-end'"}</code>
// 							<code>{'hoverProps={{delay: 1000}}'}</code>
// 						</div>
// 						<div className='content-item'>
// 							<div className='component'>
// 								<Floating floatingComponent={<FillBeacon />} placement='left' hoverProps={{enabled: false}}>
// 									<div className='box'>Twelve</div>
// 								</Floating>
// 							</div>
// 							<code>{'floatingComponent={<FillBeacon />}'}</code>
// 							<code>{"placement='top-end'"}</code>
// 							<code>{'hoverProps={{enabled: false}}'}</code>
// 						</div>
// 					</div>
// 				</div>
// 				<div className='card'>
// 					<span className='title'>Arrow</span>
// 					<div className='content'>
// 						<div className='content-item'>
// 							<div className='component'>
// 								<FloatingTree>
// 									<Floating
// 										arrow={{enabled: true, size: 5, style: {backgroundColor: 'coral'}}}
// 										floatingComponent={
// 											<Floating
// 												arrow={{enabled: true, size: 15, style: {backgroundColor: 'coral'}}}
// 												floatingComponent={<div className='popover-box'>Three</div>}
// 												middleware={[offset(15)]}
// 												open
// 												placement='top'
// 											>
// 												<div className='popover-box'>Two</div>
// 											</Floating>
// 										}
// 										middleware={[offset(5)]}
// 										open
// 										placement='left'
// 									>
// 										<div className='box'>One</div>
// 									</Floating>
// 								</FloatingTree>
// 							</div>
// 							<code>{"arrow={{enabled: true, size: 5, style: {backgroundColor: 'coral'}}}"}</code>
// 							<code>{`floatingComponent={
//             <Floating
//               arrow={{enabled: true, size: 15, style: {backgroundColor: 'coral'}}}
//               floatingComponent={<div className='popover-box'>Three</div>}
//               middleware={[offset(15)]}
//               open
//               placement='top'
//             >
//               <div className='popover-box'>Two</div>
//             </Floating>
//           }`}</code>
// 							<code>{'middleware={[offset(5)]}'}</code>
// 							<code>{'open'}</code>
// 							<code>{"placement='left'"}</code>
// 						</div>
// 						<div className='content-item'>
// 							<div className='component'>
// 								<Floating
// 									arrow={{enabled: true, size: 10, style: {backgroundColor: 'coral'}}}
// 									floatingComponent={<div className='popover-box'>Five Five Five Five Five Five Five</div>}
// 									middleware={[shift({limiter: limitShift()}), offset(10)]}
// 									open
// 									placement='right'
// 								>
// 									<Floating
// 										arrow={{enabled: true, size: 10, style: {backgroundColor: 'coral'}}}
// 										floatingComponent={<div className='popover-box'>Five Five Five Five Five Five Five</div>}
// 										middleware={[shift({limiter: limitShift()}), offset(10)]}
// 										open
// 										placement='left'
// 									>
// 										<div className='box'>Four</div>
// 									</Floating>
// 								</Floating>
// 							</div>
// 							<code>{"arrow={{enabled: true, size: 10, style: {backgroundColor: 'coral'}}}"}</code>
// 							<code>{"floatingComponent={<div className='popover-box'>Five Five Five Five Five Five Five</div>}"}</code>
// 							<code>{'middleware={[shift({limiter: limitShift()}), offset(10)]}'}</code>
// 							<code>{'open'}</code>
// 							<code>{"placement='right'"}</code>
// 							<code>{`children={<Floating
//           arrow={{enabled: true, size: 10, style: {backgroundColor: 'coral'}}}
//           floatingComponent={<div className='popover-box'>Five Five Five Five Five Five Five</div>}
//           middleware={[shift({limiter: limitShift()}), offset(10)]}
//           open
//           placement='left'
//         >
//           <div className='box'>Four</div>
//         </Floating>}`}</code>
// 						</div>
// 						<div className='content-item'>
// 							<div className='component'>
// 								<Floating
// 									arrow={{enabled: true, size: 15, style: {backgroundColor: 'coral'}}}
// 									floatingComponent={<div className='popover-box'>Six</div>}
// 									middleware={[flip(), offset(10)]}
// 									placement='bottom'
// 									hoverProps={{enabled: false}}
// 									animateProps={{
// 										initial: {
// 											scale: 0.2,
// 											opacity: 0.5,
// 										},
// 										animate: {
// 											scale: [0.2, 1],
// 											opacity: [0.5, 1],
// 										},
// 										exit: {
// 											scale: [1, 0.2],
// 											opacity: [1, 0.5],
// 										},
// 										transition: {
// 											duration: 0.05,
// 											times: [0, 1],
// 										},
// 									}}
// 								>
// 									<div className='box'>Five</div>
// 								</Floating>
// 							</div>
// 							<code>{"arrow={{enabled: true, size: 15, style: {backgroundColor: 'coral'}}}"}</code>
// 							<code>{"floatingComponent={<div className='popover-box'>Two</div>}"}</code>
// 							<code>{'middleware={[shift({limiter: limitShift()}), offset(10)]}'}</code>
// 							<code>{'hoverProps={{enabled: false}}'}</code>
// 							<code>{"placement='bottom'"}</code>
// 							<code>{`animateProps={{
//           initial: {
//             scale: 0.2,
//             opacity: 0.5,
//           },
//           animate: {
//             scale: [0.2, 1],
//             opacity: [0.5, 1],
//           },
//           exit: {
//             scale: [1, 0.2],
//             opacity: [1, 0.5],
//           },
//           transition: {
//             duration: 0.05,
//             times: [0, 1],
//           },
//         }}`}</code>
// 						</div>
// 					</div>
// 				</div>
// 				<div className='card'>
// 					<span className='title'>Popover</span>
// 					<div className='content'>
// 						<div className='content-item'>
// 							<Popover
// 								text={`took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`}
// 							/>
// 							<code>{`text={...}`}</code>
// 						</div>
// 						<div className='content-item'>
// 							<Popover
// 								className='test-class'
// 								text={`It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`}
// 							/>
// 							<code>{`text={...}`}</code>
// 							<code>{`className='test-class'`}</code>
// 						</div>
// 						<div className='content-item'>
// 							<Popover text={`Lorem Ipsum`} style={{background: 'coral'}} />
// 							<code>{`text={...}`}</code>
// 							<code>{`style={{background: 'coral'}}`}</code>
// 						</div>
// 					</div>
// 				</div>
// 				<div className='card'>
// 					<span className='title'>Hint</span>
// 					<div className='content'>
// 						<div className='content-item'>
// 							<Hint hit={2} popover='Two' beaconProps={{placement: 'right'}}>
// 								<div className='box'>One</div>
// 							</Hint>
// 							<code>{`hit={2}`}</code>
// 							<code>{`popover='Two'`}</code>
// 							<code>{`beaconProps={{placement: 'right'}}`}</code>
// 						</div>
// 						<div className='content-item'>
// 							<Hint
// 								hit='always'
// 								popover='Five'
// 								beacon={<div className='popover-box'>Four</div>}
// 								beaconProps={{placement: 'top-end'}}
// 							>
// 								<div className='box'>Three</div>
// 							</Hint>
// 							<code>{`hit='always'`}</code>
// 							<code>{`popover='Five'`}</code>
// 							<code>{`beaconProps={{placement: 'top-end'}}`}</code>
// 							<code>{`beacon={<div className='popover-box'>Four</div>}`}</code>
// 						</div>
// 						<div className='content-item'>
// 							<Hint
// 								hit='always'
// 								popover={<Popover text='Eight' style={{backgroundColor: 'coral'}} />}
// 								popoverProps={{arrow: {enabled: false}}}
// 								beacon={<div className='popover-box'>Seven</div>}
// 								beaconProps={{placement: 'top-end'}}
// 							>
// 								<div className='box'>Six</div>
// 							</Hint>
// 							<code>{`hit='always'`}</code>
// 							<code>{`popover={<Popover text='Eight' style={{backgroundColor: 'coral'}} />}`}</code>
// 							<code>{`popoverProps={{arrow: {enabled: false}}}`}</code>
// 							<code>{`beacon={<div className='popover-box'>Seven</div>}`}</code>
// 							<code>{`beaconProps={{placement: 'top-end'}}`}</code>
// 						</div>
// 					</div>
// 				</div>
// 			</div> */}
